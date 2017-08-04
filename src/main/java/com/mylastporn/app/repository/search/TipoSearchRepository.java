package com.mylastporn.app.repository.search;

import com.mylastporn.app.domain.Tipo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tipo entity.
 */
public interface TipoSearchRepository extends ElasticsearchRepository<Tipo, Long> {
}
