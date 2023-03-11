import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    ManyToOne,
    UpdateDateColumn,
    CreateDateColumn
} from 'typeorm'
import { Address } from './addresses.entity'
import { Category } from './categories.entity'

@Entity('real_estate')
class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ default: false })
    sold: boolean 

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    value: number

    @Column()
    size: number

    @CreateDateColumn({ type:'date' })
    createdAt: Date

    @UpdateDateColumn({ type: 'date' })
    updatedAt: Date

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address

    @ManyToOne(()=> Category)
    category: Category
}

export {
    RealEstate
}