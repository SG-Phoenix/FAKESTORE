import { UserPageMenuItem } from "./user-page-menu-item";

export const MENU_ITEMS: UserPageMenuItem[] = [
  { text:"Bacheca", route: "/user/main", icon: "apps"},
  { text:"Ordini", route: "/user/orders", icon: "local_grocery_store" },
  { text:"Vendite", route: "/user/selling", icon: "local_offer" },
  { text:"Dettagli account", route: "/user/details", icon: "account_circle" },
  { text:"Indirizzi", route: "/user/addresses", icon: "home" },
  { text:"I miei prodotti", route: "/user/products", icon: "reorder" }
];
