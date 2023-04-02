import { css } from "@emotion/react";
import makeStyles from "src/styles/makeStyles";

export const styles = makeStyles({
  header:() => css`
    height: 60px;
    background-color: #05b8c1;
    color: white;
  `,
  container: () => css`
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
  `,
  title: () => css`
    line-height: 60px;
  `,
  lists: () => css`
    display: flex;
    line-height: 60px;
    font-size: 16px;
  `,
  list: () => css`
    padding-left:20px;
    &:hover {
      cursor: pointer;
    }
  `

})