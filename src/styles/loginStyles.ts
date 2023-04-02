import { css } from "@emotion/react";
import makeStyles from "./makeStyles";

export const styles = makeStyles({
  header :() => css`
    height:60px;
    background-color: #05b8c1;
    color:white;
    text-align: center;
    line-height: 60px;
  `,
  container: () => css`
    border:1px solid #ddd;
    border-radius: 10px;
    width:530px;
    margin:0 auto;
    margin-top:100px;
    padding:50px 30px;
    text-align: center;
  `
})