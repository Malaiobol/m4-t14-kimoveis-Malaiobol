import { 
    Entity,
    PrimaryGeneratedColumn,
    Column, 
    ManyToOne
} from 'typeorm'
import { RealEstate } from './realState.entity';
import { User } from './users.entity'

@Entity('schedule_users_properties')
class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'date'})
    date: string | Date;

    @Column({type: 'time'})
    hour: string | number;

    @ManyToOne(() => RealEstate, estate => estate.schedule)
    realEstate: RealEstate;

    @ManyToOne(() => User, user => user.schedule)
    user: User;

}

export {
    Schedule
};