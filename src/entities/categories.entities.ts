import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm'

@Entity('users')
class Category{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    name: string
}

export {
    Category
}