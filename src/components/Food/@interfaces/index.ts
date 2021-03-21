import { FoodType } from "../../../@types/FoodType";

export interface IFoodProps {
  food: FoodType;
  handleDelete: (id: number) => void;
  handleEditFood: (food: FoodType) => void;
}
