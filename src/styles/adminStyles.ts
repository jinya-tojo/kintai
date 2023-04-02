import { css } from '@emotion/react'
import makeStyles from './makeStyles'

export const styles = makeStyles({
  day: () => css`
    font-size: 36px;
    color:#184B66;
    text-align: center;
    padding-top:50px;
  `,
  payContainer: () => css`
  width: 800px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 40px;
`,
title: () => css`
  height: 40px;
  background-color: #05b8c1;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
`,
items: () => css`
  display: flex;
  color: #184b66;
  font-size: 13px;
  font-weight: bold;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  padding: 7px 0;
`,
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