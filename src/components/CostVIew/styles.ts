import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    width: 380px;
    height: 158px;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  titleContainer: () => css`
    height: 40px;
    background-color: #05b8c1;
    border-radius: 10px 10px 0 0;
    color: white;
  `,
  title: () => css`
    font-size: 24px;
    text-align: center;
    line-height: 40px;
  `,
  main: () => css`
    border-bottom: 1px solid #ddd;
    padding: 5px;
    text-align: center;
  `,
  mainTitle: () => css`
    color: #184b66;
    font-size: 20px;
  `,
  mainCost: () => css`
    font-size: 40px;
    color: #ff5772;
    font-weight: bold;
  `,
  sub: () => css`
    display: flex;
    height: 45px;
    font-size: 13px;
    color: #184b66;
    text-align: center;
    line-height: 45px;
  `,
  sub1: () => css`
    border-right: 1px solid #ddd;
    width: 190px;
  `,
  sub2: () => css`
    width: 190px;
  `,
  subCost: () => css`
    font-size: 20px;
    font-weight: bold;
  `,
})
