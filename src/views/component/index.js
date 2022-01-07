import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Tabss from './Tabs';
import Table from './Table';

// app
const Compo = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div clasName="page">
            <div>
                <Navbar isLoading={isLoading} />
                <div>
                    <h2>Something</h2>
                </div>
                <Tabss isLoading={isLoading} />
            </div>
            <div>
                <Table isLoading={isLoading} />
            </div>
        </div>
    );
};

export default Compo;
