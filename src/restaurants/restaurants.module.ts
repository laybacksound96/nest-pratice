import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurants.module.resolver';

@Module({ providers: [RestaurantResolver] })
export class RestaurantsModule {}
