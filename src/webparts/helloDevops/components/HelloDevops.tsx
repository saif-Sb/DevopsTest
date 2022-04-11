import * as React from 'react';
import styles from './HelloDevops.module.scss';
import { IHelloDevopsProps } from './IHelloDevopsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloDevops extends React.Component<IHelloDevopsProps, {}> {
  public render(): React.ReactElement<IHelloDevopsProps> {
    return (
      <div className={ styles.helloDevops}>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint Saif!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
