import { useUser } from '@clerk/clerk-react';
import { FinancialRecordForm } from './financial-record-form';
import { FinancialRecordList } from './financial-record-list';
import { useFinancialRecords } from '../../context/financial-record-context';
import { useMemo } from 'react';

export const Dashboard = () => {

    const { user } = useUser();
    const { records } = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount += record.amount;
        });

        return totalAmount;
    }, [records])

    return (
        <div className="dashboard-container">
            <h1>
                Welcome {user?.firstName}! A Look Into Your Finances:
            </h1>

            <FinancialRecordForm />
            <div>
                Monthly Savings: ${totalMonthly}    
            </div>
            <FinancialRecordList />
            
        </div>
    )
}