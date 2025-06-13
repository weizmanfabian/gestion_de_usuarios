import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('usuarios')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'usu_id'})
    id: number;

    @Column({name: 'usu_nombre'})
    nombre: string;

    @Column({name: 'usu_email'})
    email: string;

    @CreateDateColumn({name: 'usu_created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'usu_updated_at'})
    updatedAt: Date;

    merge(updateData: Partial<User>) {
        Object.entries(updateData).forEach(([key, value]) => {
            if (value !== undefined && key in this) {
                (this as any)[key] = value;
            }
        });
    }
}