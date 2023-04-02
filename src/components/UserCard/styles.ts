import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getBackgroundColorStyle = (color: string) => {
  switch (color) {
    case 'white':
      return css`
        background-color: #fff;
      `
    case 'pink':
      return css`
        background-color: #f5b700;
      `
    case 'orange':
      return css`
        background-color: #f7b2bd;
      `
  }
}

export const styles = makeStyles({
  container: () => css`
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: white;
    width: 200px;
    height: 90px;
    color: #184b66;
    padding: 12px 15px 15px 15px;
    margin-bottom: 35px;
    margin-right: 17px;
    margin-left:17px;
    &:hover {
      cursor: pointer;
    }
  `,
  name: () => css`
    font-size: 20px;
    padding-bottom: 5px;
  `,
  info: () => css`
    font-size: 14px;
    padding-bottom: 3px;
  `,
})
