import { css } from "@emotion/react";
import makeStyles from "src/styles/makeStyles";

export const styles = makeStyles({
  container: () => css`
    display: flex;
    justify-content: space-between;
    width:430px;
    height:41.5px;
    margin-bottom: 25px;
  `,
  nameBox: () => css`
    width:130px;
    text-align:center;
  `,
  name: () => css`
    color:#184B66;
    font-size: 16px;
    line-height:41.5px;
    font-weight: bold;
  `,
  input: () => css`
    width:300px;
    padding:12px;
    border:1px solid #ddd;
    border-radius: 5px;
  
  `
})