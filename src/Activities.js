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
                        フレームワークにReactを使って作成しました。SPAのreact-router-domに初めて手を出してみました
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
                        <CardTitle><a href="https://on-da.github.io/react-calc/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >電卓(React+Redux+CSS)</a></CardTitle>
                        <CardText>ReactとReduxの練習も兼ねて電卓チャレンジ2回目。Reactはリアルタイムに情報を更新できるが、データの管理は微妙でReduxで補わないとだめなんだなってのがわかりました。
                        </CardText>
                    </CardBody>
                </Card>


            


                <Card className="textarea">
                    <CardBody>
                        <CardTitle><a href="　"
                            target="_blank"
                            rel="noreferrer noopener"
                        >現在制作中</a></CardTitle>
                        <CardText>フロント言語だけではアプリは作れぬと言う事実に今更気づき、サーバーサイドの言語（多分Node.jsにする）勉強しなきゃってなっています。</CardText>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}