import { css } from "@emotion/react";
import makeStyles from "src/styles/makeStyles";

export const styles = makeStyles({
  memberItem: () => css`
    display: flex;
    color: #184b66;
    font-size: 18px;
    justify-content: space-around;
    border-top: 1px solid #ddd;
    height: 40px;
    line-height: 40px;
  `,
  eachItem: () => css`
    width: 20%;
    text-align: center;
  `,
  cost: () => css`
    color: #ff5772;
  `,
})