import React from 'react';
import { MyOrderForm } from './style';
import useRequestData from "../../hooks/useRequestData"
import { useForm } from 'react-hook-form';


export default function Form() {
    //dados form
    const [form, onChange, restForm] = useForm({client:"", product:"", qty:1, deliveryDate:""})
    //clients
    const [dataClient, isLoadingClient, erroClient] = useRequestData("http://localhos:3003/clients")
    //dados produtos
    const [dataProduct, isLoadingProduct, erroProduct] = useRequestData("http://localhost:3003/products")
    //client selected
    const selectClient =!isLoadingClient && dataClient && dataClient.find((dClient)=>{
        return dClient.name === form.client
    })
    console.log(dataClient)
    return (
        <MyOrderForm>
            {/* //client */}
            <div id='selec-client'>
                <label htmlFor='client' >Nome do Cliente </label>
                <input id="client" list='dataClient' onChange={onChange} value={form.client}></input>
                <datalist id='dataClient'>
                        {/* <option> Jr </option>
                        <option> Paulo </option>
                        <option> José </option>
                        <option> Maria </option> */}
                    {isLoadingClient && !dataClient && <option>Carregando...</option>}
                    {!isLoadingClient &&dataClient && dataClient.map((client)=>{
                        return <optio key={client.id}>{client.name}</optio>
                    })}
                </datalist>
                <button>Confirmar</button>
            </div>
            {/* //Prtoduct */}
            <div id='select-product'>
                <label htmlFor='product' >Produto </label>
                <input id="product" list='dataProduct'></input>
                <datalist id='dataProduct'>
                    {/* <option> Banana </option>
                    <option> Mamão </option>
                    <option> Macã </option>
                    <option> Goiaba </option> */}
                    {isLoadingProduct && !dataProduct && <option>Carregando...</option>}
                    {!isLoadingProduct &&dataProduct && dataProduct.map((product)=>{
                        return <optio key={product.id}>{product.name}</optio>
                    })}

                </datalist>
                <label>Quantidade </label>
                <input id="qty" type={"number"}></input>
                <p>R$: 10000</p>
                <button>Ok</button>
            </div>
            {/* //Order */}
            <div id='order'>
                <label htmlFor='deliveryDate' >Data de entrega (DD/MM/AAAA) </label>
                <input id="deliveryDate" ></input>
                <button>Confirmar </button>
            </div>
        </MyOrderForm>
    );
}