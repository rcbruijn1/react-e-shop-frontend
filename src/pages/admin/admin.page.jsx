import React, { Fragment } from 'react';

// Core
import { Card } from '@material-ui/core';
import { Main } from '../../components';
import { CreateShopItemForm } from '../../components/forms';


const AdminPage = () => {

    return (
        <Fragment>
            <Main>
                <Card style={{ width: '100%', maxWidth: 1280, padding: 24, margin: 'auto' }}>
                    <CreateShopItemForm />
                </Card>
            </Main>
        </Fragment>
    );
};

export default AdminPage;