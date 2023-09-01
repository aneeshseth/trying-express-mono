"use client"
import { Button, Header } from "ui";
import {userState} from 'store'

export default function Page(): JSX.Element {
  return (
    <>
      <Header text="Web" />
      <Button />
      <button onClick={()=>console.log(userState)}></button>
    </>
  );
}
