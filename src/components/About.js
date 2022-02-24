import React from 'react';
import './styles/About.css';

class About extends React.Component {

    render(){
        return(
            <div id="about-page" className="container">
		MitoVisualize is a tool for analysis of variants in human mitochondrial RNAs and DNA.<br /><br />
		
		MitoVisualize can be used to: <br />
		<ol>
		<li>Analyze a variant in a mitochondrial RNA gene, by visualizing its position in the RNA structure alongside various variant annotations.</li>
		<li>Visualize data across RNA structures, such as to show all positions with disease-associated variants.</li>
		<li>Label a base or region in the circular mtDNA, such as to visualize the location of a large deletion.</li>
		</ol>
        All visualizations can be easily downloaded as png figures for reuse.
		<br /><br />
		MitoVisualize can be useful for anyone interested in exploring mtDNA variation, though is designed to facilitate mtDNA variant interpretation in particular. 
		<br /><br />

		<b>Citation:</b><br />
		If you use MitoVisualize, please cite "Lake NJ, Zhou L, Xu J, Lek M. 2021. MitoVisualize: A resource for analysis of variants in human mitochondrial RNAs and DNA. bioRxiv <a href="https://www.biorxiv.org/content/10.1101/2021.12.04.470997v1" target="_blank">doi: 10.1101/2021.12.04.470997</a>"
		<br /><br />

		<b>Contacts & Team:</b><br />
		Nicole Lake, Lily Zhou, Monkol Lek<br />
		All code for this tool is on the <a href="https://github.com/leklab/mito_visualize" target="_blank">github repository</a><br />
		To share feedback or suggest improvements, please leave a message (as an issue) on the <a href="https://github.com/leklab/mito_visualize/issues" target="_blank">github repository</a>.<br/>
                For general enquiries please email mitovisualize@gmail.com.<br />
		<br />

		<b>Acknowledgements of Data Sources:</b><br />
		MitoVisualize displays information from a variety of sources which we gratefully acknowledge (version details or date of last access are noted):
		<ul>
                    <li>Amunts A, Brown A, et al. Ribosome. The structure of the human mitochondrial ribosome. Science. 2015 Apr 3;348(6230):95-98. doi: 10.1126/science.aaa1193. <a href="https://pubmed.ncbi.nlm.nih.gov/25838379/" target="_blank">PMID: 25838379</a>.</li>
                    <li>Brown A, Amunts A, et al. Structure of the large ribosomal subunit from human mitochondria. Science. 2014 Nov 7;346(6210):718-722. doi: 10.1126/science.1258026. <a href="https://pubmed.ncbi.nlm.nih.gov/25278503/" target="_blank">PMID: 25278503</a>.</li>
                    <li><a href="https://www.ncbi.nlm.nih.gov/clinvar/ " target="_blank">ClinVar</a> (date of access 31st August 2021)</li>
                    <li><a href="https://gnomad.broadinstitute.org/" target="_blank">gnomAD</a> (version 3.1)</li>
                    <li><a href="https://www.helix.com/pages/mitochondrial-variant-database" target="_blank">HelixMTdb</a> (version dated 2020/03/27)</li> 
                    <li><a href="https://www.hmtvar.uniba.it/" target="_blank">HmtVar</a> (date of access 6th June 2021)</li>
                    <li><a href="http://mamit-trna.u-strasbg.fr/" target="_blank">Mamit-tRNA</a> (date of access 15th September 2020)</li> 
                    <li><a href="https://www.mitomap.org/MITOMAP" target="_blank">MITOMAP, including MitoTip</a> (date of access 31st August 2021)</li>
                    <li><a href="https://genome.ucsc.edu/cgi-bin/hgTrackUi?db=hg38&g=cons100way#TRACK_HTML" target="_blank">PHAST (phastCons and phyloP) via UCSC</a> (hg38)</li> 
                    <li><a href="https://www.phylotree.org/" target="_blank">Phylotree</a> (build 17)</li>
                    <li><a href="http://structure.bmc.lu.se/PON-mt-tRNA/" target="_blank">PON-mt-tRNA</a> (date of access 2nd June 2021)</li>
                    <li>Rebelo-Guiomar P, et al. The mammalian mitochondrial epitranscriptome. Biochim Biophys Acta Gene Regul Mech. 2019 Mar;1862(3):429-446. <a href="https://pubmed.ncbi.nlm.nih.gov/30529456/" target="_blank">PMID: 30529456</a></li>
                    <li>Suzuki T, et al. Complete chemical structures of human mitochondrial tRNAs. Nat Commun. 2020 Aug 28;11(1):4269. <a href="https://pubmed.ncbi.nlm.nih.gov/32859890/" target="_blank">PMID: 32859890.</a></li>
		</ul>

		<br />
		<b>Variant data & API:</b><br />
        The variant annotations can be downloaded in tsv format via the ‘Download Variant Data’ button at the bottom of each variant page. <br /><br />
        MitoVisualize allows users to access its processed data directly via the <a href="https://mitovisualize.org/api" target="_blank">GraphQL interface</a>. 
        It allows for queries using mtDNA coordinate (example: <code>coordinate(var_coordinate:2492)</code>), variant ID (example: <code>variant(var_id:"m.5618T>A")</code>), or gene name (example: <code>gene(gene: "MT-TA")</code>). 
        To access specific fields, add the field name to the query (example: <code>post_transcription_modifications</code>). 
        A complete list of fields can be found on the GraphQL interface in the Documentation Explorer in the top-right corner. 
        The query output is in JSON format which allows for easy parsing.
        <br />

        Example: The user may search for the variant with ID "m.5618T>C" in the following format:
        <br /><br />
        <pre style={{marginLeft: "2rem"}}>
          <code>
            variant(var_id:"m.5618T>C")&#123;<br />&#9;gene<br />&#9;domain<br />&#9;pop_freq_gnomad_ac_hom<br />&#9;prediction_mitotip_category<br />&#125;
          </code>
        </pre>

        The query indicates that the user is searching for data about the variant m.5618T>C, and is looking for its 
        gene, domain, homoplasmic allele count in gnomAD, and in silico prediction based on MitoTip. 

        The query will render the following result:
        <br /><br />

        <pre style={{marginLeft: "2rem"}}>
          <code>
            "data": &#123;<br />&#9;"variant": &#123;<br /> &#9;&#9;"gene": [<br />&#9;&#9;&#9;"MT-TA"<br />&#9;&#9;],<br />&#9;&#9;"domain": "Anticodon stem",<br />&#9;&#9;"pop_freq_gnomad_ac_hom": 32,<br />&#9;&#9;"prediction_mitotip_category": "possibly benign"<br />&#9;&#125;<br />&#125;
          </code>
        </pre>

        This indicates that the variant is located in the MT-TA gene, within the anticodon stem domain, and that it 
        has a homoplasmic allele count of 32 in gnomAD, and is predicted to be possibly benign by MitoTip.


        <br /><br />
        A key for the API fields and tsv file column names is provided in this <a href="./MitoVisualize_key.txt">file</a>

		<br /><br /><br /><br /><br /><br />

         </div>

        )
    }
}

export default About;
