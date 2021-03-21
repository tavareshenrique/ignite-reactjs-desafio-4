import { FoodType } from "../../../@types/FoodType";

export interface IModalAddFood {
  handleUpdateFood: (food: FoodType) => void;
  setIsOpen: () => void;
  editingFood: FoodType;
  isOpen: boolean;
}
