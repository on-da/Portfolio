import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Top extends Component {
    render() {
        return (
            <Col>
                <h1>初めまして！</h1>
                
                <div className="textarea">
                    <p>活動の記録・成果物をまとめたものです。</p>
                    <p>まだ大した技術は持っていませんが、随時更新予定です。</p>

                    <p> </p>
                        各アカウント
                        <ul>
                            <li>
                            <a href="https://github.com/on-da" 
                               target="_blank" rel="noreferrer noopener"
                            >Github</a></li>
                            <li>
                            <a>Gmail：xiangtailangentian@gmail.com</a></li>
                        </ul>
                    </div>
                
            </Col>
        );
    }
}