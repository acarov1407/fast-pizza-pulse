import MenuItem from "../components/menu/MenuItem";
import ProtectedLayout from "../layouts/ProtectedLayout";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const menu = await getMenu();
  return menu;
}


function Menu() {

  const menu = useLoaderData();

  return (
    <ProtectedLayout>
      <div>
        <ul className="divide-y divide-stone-200">
          {menu?.map(product => <MenuItem key={product.id} product={product} />)}
        </ul>
      </div>
    </ProtectedLayout>

  )
}



export default Menu