"use client"
import React from 'react'
import styles from './Card.module.scss'
import { ContentCompany } from '@/models/company.model';
import { ContentVacancy } from '@/models/vacancie.model';
import ButtonsCard from '../../molecules/ButtonsCard/Buttons-Card';

interface UnifiedCardProps {
    data: ContentCompany | ContentVacancy;
    page: 'Vacante' | 'Company';
}





export default function Card({ data, page }: UnifiedCardProps) {
    const isJobCard = (data: ContentVacancy | ContentCompany): data is ContentVacancy => {
        return 'title' in data;
    };

    const renderContent = () => {
        if (isJobCard(data)) {
            return (
                <>
                    <h2>{data.title}</h2>
                    <div className={styles.InfoContainer}>
                        <p>{data.description}</p>
                        <p>{data.status ? 'Active' : 'Inactive'}</p>
                        <p>{data.company.name}</p>
                    </div>
                  
                </>
            );
        }

        return (
            <>
                <h2>{data.name}</h2>
                <div className={styles.InfoContainer}>
                    <p>Ciudad: {data.location}</p>
                    <p>Contacto: {data.contact}</p>
                </div>
                <ButtonsCard page={page} data={data} />
            </>
        );
    };

    return (
        <div className={styles.card}>
            {renderContent()}
        </div>
    );
}