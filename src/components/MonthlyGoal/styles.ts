import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 905px;
    margin: 0 auto;
    padding: 5px;
    margin-top: 70px;
    margin-bottom: 40px;
  `,
  title: () => css`
    font-size: 20px;
    color: #ff5772;
    /* padding-top: 5px;
    padding-left: 5px; */
  `,
  goal: () => css`
    font-size: 30px;
    font-weight: bold;
    color: #184b66;
    text-align: center;
  `,
})