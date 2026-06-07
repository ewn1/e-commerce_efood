import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import { RootState } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import deleteIcon from '../../assets/deleteIcon.png'

import * as S from './styles'

const Cart = () => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>(
    'cart',
  )
  const [orderId, setOrderId] = useState<string>('')
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const [purchase, { isLoading }] = usePurchaseMutation()

  const getTotalPrice = () => {
    return items.reduce((acumulador, itemAtual) => {
      return acumulador + itemAtual.preco
    }, 0)
  }

  const formattedTotal = getTotalPrice().toFixed(2).replace('.', ',')

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardName: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema,
      ),
      cardNumber: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema,
      ),
      cardCode: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema,
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema,
      ),
      expiresYear: Yup.string().when((values, schema) =>
        step === 'payment' ? schema.required('O campo é obrigatório') : schema,
      ),
    }),
    onSubmit: async (values) => {
      const checkoutPayload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
      }

      try {
        const response = await purchase(checkoutPayload).unwrap()
        setOrderId(response.orderId || response.id)
        form.resetForm()
        setStep('success')
        dispatch(clear())
      } catch (error) {
        alert(
          'Houve um erro ao processar o seu pedido. Por favor, verifique os dados e tente novamente.',
        )
      }
    },
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const GoToPayment = async () => {
    form.setFieldTouched('receiver', true)
    form.setFieldTouched('description', true)
    form.setFieldTouched('city', true)
    form.setFieldTouched('zipCode', true)
    form.setFieldTouched('number', true)

    const errors = await form.validateForm()

    if (
      !errors.receiver &&
      !errors.description &&
      !errors.city &&
      !errors.zipCode &&
      !errors.number
    ) {
      setStep('payment')
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.SideBar>
        <form onSubmit={form.handleSubmit}>
          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <p>
                  Seu carrinho está vazio, adicione pelo menos um item para
                  prosseguir com a compra
                </p>
              ) : (
                <>
                  <ul>
                    {items.map((item, index) => (
                      <S.CartItem key={index}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h3>{item.nome}</h3>
                          <span>
                            R$ {item.preco.toFixed(2).replace('.', ',')}
                          </span>
                          <img
                            onClick={() => dispatch(remove(index))}
                            src={deleteIcon}
                            alt="Remover produto"
                          />
                        </div>
                      </S.CartItem>
                    ))}
                  </ul>
                  <S.TotalPrice>
                    <span>Valor Total:</span>
                    <span>R$ {formattedTotal}</span>
                  </S.TotalPrice>
                  <S.CartButton
                    type="button"
                    onClick={() => setStep('delivery')}
                  >
                    Continuar com a entrega
                  </S.CartButton>
                </>
              )}
            </>
          )}

          {step === 'delivery' && (
            <S.DeliveryForm>
              <h4>Entrega</h4>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <div className="row-inputs">
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <IMaskInput
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onAccept={(value) => form.setFieldValue('zipCode', value)}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="00000-000"
                    lazy={false}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>

              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>

              <S.CartButtonGroup>
                <S.CartButton type="button" onClick={GoToPayment}>
                  Continuar com o pagamento
                </S.CartButton>
                <S.CartButton type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </S.CartButton>
              </S.CartButtonGroup>
            </S.DeliveryForm>
          )}

          {step === 'payment' && (
            <S.PaymentForm>
              <h4>Pagamento - Valor a pagar R$ {formattedTotal}</h4>
              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </S.InputGroup>
              <div className="row-inputs">
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <IMaskInput
                    className={`cardNumberInput ${checkInputHasError('cardNumber') ? 'error' : ''}`}
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onAccept={(value) =>
                      form.setFieldValue('cardNumber', value)
                    }
                    onBlur={form.handleBlur}
                    mask="0000 0000 0000 0000"
                    lazy={false}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <IMaskInput
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onAccept={(value) => form.setFieldValue('cardCode', value)}
                    onBlur={form.handleBlur}
                    mask="000"
                    lazy={false}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <div className="row-inputs">
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <IMaskInput
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onAccept={(value) =>
                      form.setFieldValue('expiresMonth', value)
                    }
                    onBlur={form.handleBlur}
                    mask="00"
                    lazy={false}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup style={{ width: '100%' }}>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <IMaskInput
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onAccept={(value) =>
                      form.setFieldValue('expiresYear', value)
                    }
                    onBlur={form.handleBlur}
                    mask="00"
                    lazy={false}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <S.CartButtonGroup>
                <S.CartButton type="submit" disabled={isLoading}>
                  {isLoading ? 'Processando pedido...' : 'Finalizar Pagamento'}
                </S.CartButton>
                <S.CartButton type="button" onClick={() => setStep('delivery')}>
                  Voltar para a edição de endereço
                </S.CartButton>
              </S.CartButtonGroup>
            </S.PaymentForm>
          )}

          {step === 'success' && (
            <S.SuccessMessageContainer>
              <h4>Pedido realizado - {orderId}</h4>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <S.CartButton
                type="button"
                onClick={() => {
                  setStep('cart')
                  dispatch(close())
                }}
              >
                Concluir
              </S.CartButton>
            </S.SuccessMessageContainer>
          )}
        </form>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
