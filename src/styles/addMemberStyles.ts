import { css } from "@emotion/react";
import makeStyles from "./makeStyles";

export const styles = makeStyles({
  container:() => css`
    display: flex;
    justify-content:center;
    padding-top:100px;
  `,
  inputs: () => css`
  background-color: white;
  border:1px solid #ddd;
  border-radius: 10px;
  width:490px;
  text-align: center;
  padding:50px 0;
`,
  title:() => css`
    color:#184B66;
    font-weight: bold;
  `
})