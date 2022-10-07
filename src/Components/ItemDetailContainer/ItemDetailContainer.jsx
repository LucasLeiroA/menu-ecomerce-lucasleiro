import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockAPI";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { DotSpinner } from "@uiball/loaders";
import "./ItemDetailContainer.css";
function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [isLoadoing, setIsLoading] = useState(true);
  const { id, cat } = useParams();

  useEffect(() => {
    getSingleItem(id, cat)
      .then((respuestaDatos) => {
        setData(respuestaDatos);
      })
      .finally(() => setIsLoading(false));
  }, [id, cat]);

  // este se usa para ver que los datos no se hayan modificado o cargados para poder hacer el render de error o cargando..

  return (
    <>
      {isLoadoing ? (
        <div className="loader">
          <DotSpinner size={40} speed={0.9} color="black" />
        </div>
      ) : (
        <ItemDetail data={data} />
      )}
    </>
  );
}

export default ItemDetailContainer;
