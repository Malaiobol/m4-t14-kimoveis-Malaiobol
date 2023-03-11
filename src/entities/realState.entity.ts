import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    OneToMany,
    ManyToOne
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

    @Column({ type:'date' })
    createdAt: Date

    @Column({ type: 'date' })
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