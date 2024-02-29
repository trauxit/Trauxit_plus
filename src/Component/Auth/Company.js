import React, { useState } from 'react'
import { Stepper, Button, Group } from '@mantine/core';
import styles from '../../Styles/companysignup.module.css'
import Headersign from '../../Layout/Headersign';
import { useForm } from '@mantine/form';
import { Select } from '@mantine/core';
import { NumberInput, TextInput, Box } from '@mantine/core';
const Company = () => {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const form = useForm({
        initialValues: { name: '', email: '', address: '', contact: '', phone: '', preferred: '', shippings: '', billingAddress: '', billingPerson: '' },
        // functions will be used to validate values at corresponding key
        /*  validate: {
             name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
             email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
             age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
         }, */
    });
    const [city, setCity] = useState('');
    const [method, setMethod] = useState('');
    return (
        <>
            <Headersign />
            <section className={`stepper ${styles.sec}`}>
                <h3 className={`${styles.regcom}`}>Registration</h3>
                <p className={`${styles.reg__para}`}>Please select one of the two options</p>
                <form>
                    <Stepper active={active} color="orange" size="xs" onStepClick={setActive}>
                        <Stepper.Step label="" description="">
                            <h3 className={`${styles.info}`}>Company Information:</h3>
                            <TextInput label="Company Name" placeholder="Text input field" {...form.getInputProps('name')} className={`${styles.input}`} />
                            <TextInput label="Company Address" placeholder="Text input field" {...form.getInputProps('address')} className={`${styles.input}`} />
                            <TextInput label="Company Contact Person " placeholder="Text input field" {...form.getInputProps('contact')} className={`${styles.input}`} />
                            <TextInput label="Company Phone Number" placeholder="+002" {...form.getInputProps('phone')} className={`${styles.input}`} />
                            <TextInput label="Company Email Address " placeholder="Text input field" {...form.getInputProps('email')} className={`${styles.input}`} />
                        </Stepper.Step>
                        <Stepper.Step label="" description="">
                            <h3 className={`${styles.info}`}>Shipment Preferences:</h3>
                            <Select data={['ground', 'Baden-Wurttembreg', 'Bavaria', 'Thuringia']}
                                value={city}
                                onChange={setCity}
                                defaultValue="ground"
                                className={`${styles.city}`}
                                placeholder='ground'
                                label="Preferred Shipment Types" />
                            <TextInput label="Preferred Carriers " placeholder="preferred shipping companies" {...form.getInputProps('preferred')} className={`${styles.input}`} />
                            <TextInput label="Special Instructions" placeholder="specific shipping instructions" {...form.getInputProps('shippings')} className={`${styles.input}`} />

                        </Stepper.Step>
                        <Stepper.Step label="" description="">
                            <h3 className={`${styles.info}`}>Financial Information</h3>

                            <TextInput label="Billing Address " placeholder="Text input field" {...form.getInputProps('billingAddress')} className={`${styles.input}`} />
                            <Select data={['ground', 'Baden-Wurttembreg', 'Bavaria', 'Thuringia']}
                                value={method}
                                onChange={setMethod}
                                defaultValue="ground"
                                className={`${styles.city}`}
                                placeholder='Text input field'
                                label="Payment Method" />
                            <TextInput label="Billing Contact Person" placeholder="Text input field" {...form.getInputProps('billingPerson')} className={`${styles.input}`} />

                        </Stepper.Step>
                        <Stepper.Completed>
                            <h3 className={`${styles.info}`}>Your register is completed </h3>
                        </Stepper.Completed>
                    </Stepper>
                    {
                        active === 3 ?
                            <Group justify="center" mt="xl">
                                <Button type='submit' className={`${styles.nextstep}`}>Submit</Button>
                            </Group>
                            :
                            <Group justify="center" mt="xl">
                                <Button variant="default" onClick={prevStep}>Back</Button>
                                <Button onClick={nextStep} className={`${styles.nextstep}`} >Next step</Button>
                            </Group>
                    }



                </form>
            </section>
        </>
    );
}

export default Company
