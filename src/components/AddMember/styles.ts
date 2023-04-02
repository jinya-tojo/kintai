import { css } from "@emotion/react";
import makeStyles from "src/styles/makeStyles";

export const styles = makeStyles({
  container: () => css`
    background-color: white;
    border:1px solid #ddd;
    border-radius: 10px;
    width:490px;
    text-align: center;
    padding:50px 0;
  `
})