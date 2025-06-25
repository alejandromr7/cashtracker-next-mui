import { cookies } from "next/headers";

export default function getToken() {
  const token = cookies().get('chastracker-token')?.value;
  return token;
}