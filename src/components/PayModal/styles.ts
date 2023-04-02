import { css } from "@emotion/react";
import makeStyles from "src/styles/makeStyles";

export const styles = makeStyles({
  overlay: () => css`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  container: () => css`
    width:300px;
    background-color: white;
    border:1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    color:#184B66;
    padding:20px ;
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    top:350px;
    z-index:10;
  `,
  description: () => css`
    display: flex;
    justify-content: space-around;
    padding:10px 0 20px;
    font-size: 20px;
    font-weight: bold;
  `
})