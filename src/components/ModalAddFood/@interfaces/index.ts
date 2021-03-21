import { FoodType } from "../../../@types/FoodType";

export interface IModalAddFood {
  handleAddFood: (food: FoodType) => void;
  setIsOpen: () => void;
  isOpen: boolean;
}
