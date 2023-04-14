import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home/Home"
import AddEmployee from "./components/AddEmployee/AddEmployee"
import EmployeeList from "./components/EmployeeList/EmployeeList"
import EmployeeUpdate from "./components/EmployeeList/EmployeeUpdate"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <AddEmployee />,
        },
        {
          path: "/employeelist",
          element: <EmployeeList />
        },
        {
          path: "/update/:id",
          element: <EmployeeUpdate />,
          loader: ({ params }) => fetch(`http://localhost:5000/employee/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
