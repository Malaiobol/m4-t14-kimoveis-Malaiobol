import { getRounds, hashSync } from 'bcryptjs'
import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm'
import { Schedule } from './schedules.entity'

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
    createdAt: string 

    @UpdateDateColumn({ type:"date" })
    updatedAt: string 

    @DeleteDateColumn({ type:"date" })
    deletedAt: string

    @OneToMany(() => Schedule, schedule => schedule.user)
    schedule: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}   

export {
    User
}