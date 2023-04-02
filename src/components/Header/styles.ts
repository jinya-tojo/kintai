import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  header: () => css`
    height: 60px;
    background-color: #05b8c1;
    color: white;
  `,
  container: () => css`
    display: flex;
    justify-content: space-between;
    width: 905px;
    margin: 0 auto;
  `,
  main: () => css`
    font-size: 22px;
    line-height: 60px;
    width: 90px;
  `,
  management: () => css`
    font-size: 16px;
    line-height: 60px;
    &:hover {
      cursor: pointer;
    }
  `,
})