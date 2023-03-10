import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm'

@Entity('users')
class User{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @Column({ default: false, nullable: true })
    admin: boolean

    @CreateDateColumn({ type:"date" })
    createdAt?: string | undefined | null | Date

    @UpdateDateColumn({ type:"date" })
    updatedAt?: string | undefined | null | Date

    @DeleteDateColumn({ type:"date" })
    deletedAt: Date
}   

export {
    User
}