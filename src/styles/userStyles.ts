import { css } from '@emotion/react'
import makeStyles from './makeStyles'

export const styles = makeStyles({
  container: () => css`
    background-color: #f4f8fb;
    height: 800px;
    width: 100%;
  `,
  allUser: () => css`
    width: 940px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  `,
})