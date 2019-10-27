import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Activities extends Component {
    render() {
        return (
            <Col>
                <h1>Activities</h1>

                <Card className="textarea">
                    <CardBody>
                        <CardTitle><a href="https://github.com/on-da/Portfolio.git"
                                      target="_blank"
                                      rel="noreferrer noopener" 
                                      >On-da Portfolio</a></CardTitle>
                        <CardText>このポートフォリオです。活動の記録をしていくために作成しました。
                        フレームワークにReactを使って作成しました。SPA！react-router-dom！そういうのもあるのか！って感じでした。
                        </CardText>
                    </CardBody>
                </Card>

                <Card className="textarea">
                    <CardBody>
                        <CardTitle><a href="https://on-da.github.io/calculator-js/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >電卓(HTML+CSS+javascript)</a></CardTitle>
                        <CardText>JSを勉強してインプットが一通り終わったかな？と思い製作しました。
                            evalを使わずに作ってみなよと知人に勧められて、少し難儀しました。</CardText>
                    </CardBody>
                </Card>


                <Card className="textarea">
                    <CardBody>
                        <CardTitle><a href="https://github.com/on-da/ToDo-React"
                            target="_blank"
                            rel="noreferrer noopener"
                        >ToDoリスト(React.js+Redux Persist)</a></CardTitle>
                        <CardText>ReactでTodoリストを作ってみて、リロードしても値が保持されるようにReduxも使って作ってみました。</CardText>
                    </CardBody>
                </Card>


                <Card className="textarea">
                    <CardBody>
                        <CardTitle><a href="　"
                            target="_blank"
                            rel="noreferrer noopener"
                        >現在制作中</a></CardTitle>
                        <CardText>APIとか使ったりしたほうがいいかなとか思案中です。</CardText>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}