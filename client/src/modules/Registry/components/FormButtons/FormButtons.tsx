import { Form, Row, Col, Button } from 'antd';
import { TAIL_FORM_ITEM_LAYOUT } from 'modules/Registry/constants';

type Props = {
  onPrevious?: () => void;
  submitTitle?: string;
};

export function FormButtons({ onPrevious, submitTitle = 'Submit' }: Props) {
  return (
    <Form.Item {...TAIL_FORM_ITEM_LAYOUT(!!onPrevious)} className="buttons">
      <Row justify="end" gutter={16}>
        {onPrevious ? (
          <Col>
            <Button size="large" type="default" onClick={onPrevious}>
              Previous
            </Button>
          </Col>
        ) : null}
        <Col>
          <Button size="large" type="primary" htmlType="submit">
            {submitTitle}
          </Button>
        </Col>
      </Row>
    </Form.Item>
  );
}
