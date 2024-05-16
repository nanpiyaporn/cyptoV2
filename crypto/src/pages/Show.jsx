import React from "react"
import showStore from "../stores/showStore"
import { useParams } from "react-router-dom"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Show() {
  const store = showStore()
  const params = useParams()

  React.useEffect(() => {

    store.fetchData(params.id)
  },[])
  return (
    <div>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={store.graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    

    </div>
  )
}
