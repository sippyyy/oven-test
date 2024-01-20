export interface todoType {
  daily: todoDetailType[] ;
  planned: todoDetailType[] ;
  personal: todoDetailType[] ;
  work: todoDetailType[] ;
  shopping: todoDetailType[] ;
  event: todoDetailType[] ;
}

export interface todoDetailType {
  id:string,
  hour: string;
  minute: string;
  name: string;
  completed?: boolean;
  category: Category
}

export type Category = "daily" | "planned" | "personal" | "work" | "shopping" | "event";
