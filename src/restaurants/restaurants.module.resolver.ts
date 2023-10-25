import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query(() => Boolean)
  test(): boolean {
    return true;
  }
}
