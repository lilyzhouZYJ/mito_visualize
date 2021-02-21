import React from 'react';
import './styles/About.css';

class About extends React.Component {

    render(){
        return(
            <div id="about-page" className="container">
		MitoVisualize displays information and generates figures for variants and genes of interest in the human mitochondrial DNA (mtDNA), 
		specifically for RNA and mtDNA structures.<br /><br />
		
		Current functionality includes: <br />
		<ol>
		<li>Easy generation of figures to display position of variants in mitochondrial RNA structures, and in the mtDNA (including regions of large deletion)</li>
		<li>Display of information for variants in mitochondrial RNA genes, including but not limited to population frequency data, in silico predictions, and reported disease associations, </li>
		<li>Visualization of data across mitochondrial RNA structures, such as to show all positions with disease-associated variants</li>
		</ol>
		<br />
		MitoVisualize may be useful for anyone interested in exploring mtDNA variation, though it has been designed to facilitate mtDNA variant interpretation 
		in particular. 
		<br /><br />

		<b>Citation:</b><br />
		If you use MitoVisualize, please cite XXX.
		<br /><br />

		<b>Contacts & Team:</b><br />
		Nicole Lake, Lily Zhou, Monkol Lek<br />
		All code for this tool is on the <a href="https://github.com/lilyzhouZYJ/mito_visualize">github repositiory</a><br />
		To share feedback, suggest improvements, or for any other enquiries please leave a message (as an issue) on the  
		 <a href="https://github.com/lilyzhouZYJ/mito_visualize/issues">github repository</a>
		<br /><br />

		<b>Acknowledgements:</b><br />
		MitoVisualize displays information from a variety of sources which we gratefully acknowledge:
		<ul>
		<li><a href="https://www.ncbi.nlm.nih.gov/clinvar/ ">ClinVar</a></li>
		<li><a href="https://gnomad.broadinstitute.org/">gnomAD</a></li>
		<li><a href="https://www.helix.com/pages/mitochondrial-variant-database">HelixMTdb</a></li> 
		<li><a href="https://www.hmtvar.uniba.it/">HmtVar</a></li>
		<li><a href="http://mamit-trna.u-strasbg.fr/">Mamit-tRNA</a></li> 
		<li><a href="https://www.mitomap.org/MITOMAP">MITOMAP, including MitoTip</a></li>
		<li><a href="https://genome.ucsc.edu/cgi-bin/hgTrackUi?db=hg38&g=cons100way#TRACK_HTML">PHAST (phastCons and phyloP) via UCSC</a></li> 
		<li><a href="https://www.phylotree.org/">Phylotree</a></li>
		<li><a href="http://structure.bmc.lu.se/PON-mt-tRNA/">PON-mt-tRNA</a></li>
		<li>Rebelo-Guiomar P, et al. The mammalian mitochondrial epitranscriptome. <b>Biochim Biophys Acta Gene Regul 
		 Mech.</b> 2019 Mar;1862(3):429-446. <a href="https://pubmed.ncbi.nlm.nih.gov/30529456/">PMID: 30529456</a></li>
		</ul>
		<br /><br /><br /><br /><br /><br />
         </div>

        )
    }
}

export default About;
