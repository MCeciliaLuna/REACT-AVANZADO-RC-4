import { useContext, useEffect } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Nombre", width: 130 },
  { field: "category", headerName: "Categoría", width: 130 },
  { field: "price", headerName: "💵", width: 130 },
  { field: "stock", headerName: "📦", width: 130 },
  { field: "rating", headerName: "⭐", width: 130 },
  { field: "actions", headerName: "Acciones", width: 130 },
];




export default function ProductsList() {

    const { state, getAllProducts} = useContext(ProductContext)
  
  useEffect(() => {
    getAllProducts()
  }, [])
  
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
      loading={state.isLoading}
        rows={state.products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
