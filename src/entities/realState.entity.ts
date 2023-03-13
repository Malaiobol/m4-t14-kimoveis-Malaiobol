import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    ManyToOne,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany
} from 'typeorm'
import { Address } from './addresses.entity'
import { Category } from './categories.entity'
import { Schedule } from './schedules.entity'

@Entity('real_estate')
class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ default: false })
    sold: boolean 

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column()
    size: number

    @CreateDateColumn({ type:'date' })
    createdAt: string

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address

    @ManyToOne(()=> Category)
    category: Category

    @OneToMany(() => Schedule, schedule => schedule.realEstate)
    schedule: Schedule[]; 
}

export {
    RealEstate
}