import { DataResponse } from "@/interfaces/data.interfaces"
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

const $URL = 'https://jsonplaceholder.typicode.com'

interface Params {
  params: { id: string }
}

export async function GET(req: NextRequest, { params }: Params) {
  const { data } = await axios.get<DataResponse>(`${$URL}/users/${params.id}`)

  return NextResponse.json({ data })
}