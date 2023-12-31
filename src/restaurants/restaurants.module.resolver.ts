import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurants.entitiy';

@Resolver()
export class RestaurantResolver {
  @Query(() => Restaurant)
  myRestaurant(): boolean {
    return true;
  }
}
